# Docker Debug Demo

## How to run this demonstration of Docker Debug

### Start the demo

```bash
docker compose up -d
# or, if you made some changes
docker compose up -d --build
```

### Open the web page in a browser

Open this url: http://localhost:6065/
> Or use DD GUI to click on the link:
> ![Alternative Text](/imgs/01-DD-GUI.png)

You should see the following page:

![Alternative Text](/imgs/02-Web-Page.png)

### Try to debug the application from the DD GUI

You cannot use the **Exec** panel to debug the application because the application has no shell.

![Alternative Text](/imgs/03-Exec-Panel.png)

#### You have 2 options to debug the application:

- Activate the **Debug mode**:
  - Then **Docker Debug** will be launched in the **Exec** panel
  - If you click on <kbd>Open in external terminal</kbd>, you will open a new the **Docker Debug** terminal
- Start a terminal and run the following command: `docker debug webapp-demo`


## Start fixing the application

### Install tools

When you are in the terminal, install `helix`:

### Fix the message: "🎃 You've been hacked! 😈🔥"


Go to the `/public/` directory and open the `info.txt` file with **helix** with this command `hx info.txt`:
![Alternative Text](/imgs/06-hx.png)

Change the constent of the file (and save it):
> ✋ **helix** is like **vi**. To save the file, type `:wq` and press <kbd>Enter</kbd>

![Alternative Text](/imgs/07-info.png)
![Alternative Text](/imgs/08-info.png)

## 🎉 Refresh the page of the WebApp

![Alternative Text](/imgs/09-fixed.png)


## Stop the demo

```bash
docker compose down
```

## Remarks

- If some changes persist even after you stopped and restarded the containers, clear the cache of your browser (with Chrome: <kbd>Clear Browsing Data...</kbd>).
- Don't forget to start **stop** and remove the container.
- 👋 btw: the same fixe can be done with the **Files** panel of the **Docker Debug** GUI. (TODO: find another idea of demo).
