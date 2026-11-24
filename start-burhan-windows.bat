@echo off
chcp 65001 >nul
set PYTHONUTF8=1
set PYTHONIOENCODING=utf-8
title Burhan Helper Server (localhost:5179)
cd /d "%~dp0"
echo ===================================================
echo   Starting Burhan Helper Server on localhost:5179
echo ===================================================
echo.
where python >nul 2>nul
if %errorlevel%==0 (
  start "" http://localhost:5179/
  python server.py
  goto :end
)
where py >nul 2>nul
if %errorlevel%==0 (
  start "" http://localhost:5179/
  py -3 server.py
  goto :end
)
echo [ERROR] Python is not installed! Install Python 3 from https://python.org/downloads/
:end
pause
