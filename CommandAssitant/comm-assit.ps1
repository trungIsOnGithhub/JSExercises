#!/usr/bin/env pwsh
<#
.SYNOPSIS
    AI-powered command generator using (PowerShell version)
.DESCRIPTION
    Sends a natural language requirement and returns: a PowerShell/bash command and a comment line with the original query.
#>

[CmdletBinding()]
param(
    [Parameter(Position=0, ValueFromRemainingArguments=$true)]
    [string[]]$Query,

    [Parameter(Mandatory=$false)]
    [string]$OutputFile,

    [Parameter(Mandatory=$false)]
    [switch]$Clipboard,

    [Parameter(Mandatory=$false)]
    [switch]$Help
)