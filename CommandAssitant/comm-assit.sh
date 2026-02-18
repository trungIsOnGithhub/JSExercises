#!/usr/bin/env bash
#
# comm-assit.sh - AI command support tool
#
# Usage:
#   ./comm-assit.sh "find all files larger than 100MB"
#   ./comm-assit.sh -c "list running processes"
#   ./comm-assit.sh -o cleanup.sh -c "delete old log files"
#   ./comm-assit.sh -h
#
# Dependencies:
#   - curl, jq (mandatory)
#   - xclip/xsel(Linux)/pbcopy(macOS)/clip.exe(WSL)
#

set -euo pipefail

# --- Configuration ---
API_URL="https://api.deepseek.com/v1/chat/completions"
MODEL="deepseek-chat"
SYSTEM_PROMPT="You are a Bash script expert. Output ONLY the command for the task being asked plus a short and concise explanation."