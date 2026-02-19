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

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# default parameters
OUTPUT_FILE=""
COPY_TO_CLIPBOARD=false

# --- Helpers ---
error_exit() {
    echo -e "${RED}❌ $1${NC}" >&2
    exit 1
}

#!/usr/bin/env bash
#
# comm-assit.sh - AI-powered bash command generator with clipboard support
#                 and auto‑comment at the end.
#
# Usage:
#   export DEEPSEEK_API_KEY="your-api-key"
#   ./comm-assit.sh "find all files larger than 100MB"
#   ./comm-assit.sh -c "list running processes"
#   ./comm-assit.sh -o cleanup.sh -c "delete old log files"
#   ./comm-assit.sh -h
#
# Dependencies:
#   - curl, jq (mandatory)
#   - xclip/xsel (Linux), pbcopy (macOS), or clip.exe (WSL) if using -c
#

set -euo pipefail

# --- Configuration ---
API_URL="https://api.deepseek.com/v1/chat/completions"
MODEL="deepseek-chat"
SYSTEM_PROMPT="You are a bash expert. Output ONLY the command, no explanation or markdown."

# --- Colors for output ---
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# --- Defaults ---
OUTPUT_FILE=""
COPY_TO_CLIPBOARD=false

# --- Helper functions ---
error_exit() {
    echo -e "${RED}❌ $1${NC}" >&2
    exit 1
}


check_mandatory_deps() {
    local missings=()
    command -v curl >/dev/null 2>&1 || missings+=("curl")
    command -v jq >/dev/null 2>&1 || missings+=("jq")

    # check copy to clipboard denpendencies
    command -v xclip >/dev/null 2>&1 \
            || command -v xsel >/dev/null 2>&1 \
            || command -v pbcopy >/dev/null 2>&1 \
            || missings+=("xclip/xsel/pbcopy")
    if [ ${#missing[@]} -ne 0 ]; then
        echo -e "${RED}❌ Missing dependencies: ${missing[*]}${NC}" >&2
        echo -e "${YELLOW}💡 For Ubuntu, try: sudo apt update && sudo apt install ${missing[*]}" >&2
        exit 1
    fi
}

copy_to_clipboard() {
    local text="$1"
    if command -v xclip >/dev/null 2>&1; then
        echo -n "$text" | xclip -selection clipboard
    elif command -v xsel >/dev/null 2>&1; then
        echo -n "$text" | xsel --clipboard --input
    elif command -v pbcopy >/dev/null 2>&1; then
        echo -n "$text" | pbcopy
    else
        return 1
    fi
    return 0
}
