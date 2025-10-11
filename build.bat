@echo off

REM Step 1: Set pageToDisplay to 1 in App.svelte for projects build
powershell -Command "(Get-Content src\App.svelte) -replace 'let pageToDisplay = 0;', 'let pageToDisplay = 1;' | Set-Content src\App.svelte"

REM Step 2: Build the projects version
call npm run build

REM Step 3: Delete existing build_projects folder and rename build to build_projects
if exist public\build_projects rmdir /s /q public\build_projects
move public\build public\build_projects

REM Step 4: Set pageToDisplay back to 0 in App.svelte
powershell -Command "(Get-Content src\App.svelte) -replace 'let pageToDisplay = 1;', 'let pageToDisplay = 0;' | Set-Content src\App.svelte"

REM Step 5: Build the main version
call npm run build
