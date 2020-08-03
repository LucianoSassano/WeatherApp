-Guide for running the project:

  * Visual Studio Code (IDE)
  * Bootstrap 4
  * GIT (optional)
  * NPM (Node Package Manager)


  * Visual Studio Code:
    1 - navigate to https://code.visualstudio.com/download.
    2 - select the version corresponding your OS and download.
    3 - run the installer.
    4 - if you selected the default installation settings , a vsc icon should appear in the desktop.

  * NPM:

    - For Ubuntu run the following commands in the terminal to install npm:
      1- sudo apt install npm.
      2- npm --version to check that npm is installed.
      3- if installed correctly the terminal should display the current installed npm version.

    - For Windows :
      1- navigate to https://nodejs.org/en/download/
      2- click the Windows Installer button to download the latest default version (the node js installer includes npm Package Manager).
      3- Once the installer finishes downloading, launch it. Open the downloads link in your browser and click the file.
      Or, browse to the location where you have saved the file and double-click it to launch.
      4- The system will ask if you want to run the software – click Run.
      5- You will be welcomed to the Node.js Setup Wizard – click Next.
      6- On the next screen, review the license agreement. Click Next if you agree to the terms and install the software.
      7- The installer will prompt you for the installation location. Leave the default location, unless you have a specific need to install it somewhere else – then click Next.
      8- The wizard will let you select components to include or remove from the installation. Again, unless you have a specific need, accept the defaults by clicking Next.
      9- Finally, click the Install button to run the installer. When it finishes, click Finish.
      10- Verify the installation typing  'node -v' in the command prompt , it should display the current installed version


  *GIT (optional but recommended) -> with git is easier to clone repositories once you learned how to use it , if you don't want to use this tool you can directly download
   the repository in zip format .

    -For Ubuntu run the following commands in the terminal:
      1- sudo apt update
      2- sudo apt install git
      3- git --version (if installed correctly it should display the current git version)

    -For Windows navigate to https://git-scm.com/download/win
      1- select the version corresponding to your OS and download the Installer.
      2- once downloaded run the installer.
      3- Open the command prompt and type git --version (if correctly installed it should display the current git version).

  * Bootstrap : you can install it by typing npm i bootstrap in the console or terminal , or adding the following CDN's to the index js file in the head.
    - Css CDN : <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    - Js CDN's: <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

  * Once npm and bootstrap has been correctly installed , clone the project to a previously created folder / directory by opening the command prompt , accessing the folder and typing
   git clone https://github.com/LucianoSassano/WeatherApp.git , once the installation has ended open the project with Visual Studio and type npm start in the terminal
   to run the project , it should open a new tab in the default web browser with the current project running in the port 3000.
