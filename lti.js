'use strict';

const lti = require('ims-lti');
// MemoryStore shouldn't be used in production. Timestamps must be valid within a 5 minute grace period.
const nonceStore = new lti.Stores.MemoryStore();
// secrets should be stored securely in a production app
const secrets = {
    cohota_lti_chat: 'Y6LqJ3SNDLpw1vWlmy',
    vmg_lti_chat: 'NBBVyyD3Xtagi'
};

const getSecret = (consumerKey, callback) => {
  const secret = secrets[consumerKey];
  if (secret) {
    return callback(null, secret);
  }

  let err = new Error(`Unknown consumer ${consumerKey}`);
  err.status = 403; // request is ok but server refuse

  return callback(err);
};

exports.handleLaunch = (req, res, next) => {
  if (!req.body) {
    let err = new Error('Expected a body');
    err.status = 400; // bad request
    return next(err);
  }

  const consumerKey = req.body.oauth_consumer_key; // identify client by oauth_consumer_key
  if (!consumerKey) {
    let err = new Error('Expected a consumer');
    err.status = 422;
    return next(err);
  }

  getSecret(consumerKey, (err, consumerSecret) => {
    if (err) {
      return next(err);
    }

    const provider = new lti.Provider(consumerKey, consumerSecret, nonceStore, lti.HMAC_SHA1);
    // provider will validate request is from lms or not
    // provider is from consumer key and secret + nonce and HMAC_SHA from lti
    provider.valid_request(req, (err, isValid) => {
      if (err) {
        return next(err);
      }
      if (isValid) {
        req.session.regenerate(err => {
          if (err) {
            next(err);
          }
          req.session.custom_root_account_uuid = provider.body.custom_root_account_uuid;
          req.session.custom_canvas_account_id = provider.body.custom_canvas_account_id;
          req.session.custom_domain = provider.body.custom_domain;

          // console.log(req.body.lis_outcome_service_url)

          if (req.body.lis_outcome_service_url === 'undefined')
            return res.redirect(301, '/application');
          else 
            return res.redirect(301, '/application');
        });
      } else {
        return next(err);
      }
    });
  });
};