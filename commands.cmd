First , i opened the search and wrote: git cmd

#cd downloads => is used to change the current directory to a folder named "downloads"

#mkdir dom-exercises-level2 => to create a folder

#cd dom-exercises-level2 => we have entered the file

#git init => the command git init converts any regular folder into a Git project

#notepad README.md => you can create a file and open it in Notepad to write or add whatever you want inside ( searched for something similar to nano but for Windows, i could also create it using the touch command)

#mkdir pages styles scripts => this command creates four directories (folders): pages , styles and scripts. These are used to organize the project structure.
styles: Will contain the CSS files
scripts: Will hold JavaScript files

#cd pages => this changes the current directory to the pages folder

#notepad todo.html
#notepad cart.html
#notepad calculator.html

#cd ..

#cd styles => this changes the current directory to the styles folder

#notepad styles.css => this opens Notepad and creates the styles.css file inside the styles directory

#cd .. => this takes you back to the parent directory

#cd scripts => this changes the current directory to the scripts folder.

#notepad todo.js
#notepad cart.js
#notepad calculator.js

#cd .. => this takes you back to the root of the project.

#code . => this opens the current directory in Visual Studio Code. If you're using VS Code, this command launches the editor to work on your files

#git add . => this stages all the changes made (i.e., the files and folders you created or modified) in the current directory and subdirectories, preparing them to be committed

#git commit -m "that's all the task" => this commits the staged changes with the message "feat: update website structure with pages, styles, and logo". It describes the changes 

#git remote add origin https://github.com/KhadijaShames/task-javaScript-level2.git => the command is used to link your local Git repository to a remote repository (e.g., on GitHub, GitLab, or Bitbucket)
Here’s the translation of your Git commands and explanations in English:

#git branch -M main => renamed the current branch to main

#git push -u origin main => used when you want to push to the main branch on GitHub for the first time.

#notepad index.html

#git add index.html 

#git commit -m "feat: add index.html file" => this commits the changes made to the index.html file with a message describing the change

#git push origin main => this pushes the committed changes to the remote repository on GitHub, specifically to the main branch.