> Why do I have a folder named ".expo" in my project?

The ".expo" folder is created when an Expo project is started using "npx expo start" command.

> What do the files contain?

- "devices.json": contains information about devices that have recently opened this project. This is used to populate the "Development sessions" list in your development builds.
- "packager-info.json": contains port numbers and process PIDs that are used to serve the application to the mobile device/simulator.
- "settings.json": contains the server configuration that is used to serve the application manifest.

> Should I commit the ".expo" folder?

No, you should not share the ".expo" folder. It does not contain any information that is relevant for other developers working on the project, it is specific to your machine.

Upon project creation, the ".expo" folder is already added to your ".gitignore" file.
![alt text](<../assets/app 1.jpeg>) ![alt text](../assets/app2.jpeg) ![alt text](<../assets/app image.jpeg>) ![alt text](../assets/app3.jpeg)
