# 361-admin

## Accessing the deployed project ##
The finished prototype can be accessed here: https://marthamatsui.github.io/361-admin/

## How to run ##
**SETTING UP A VIRTUAL ENVIRONMENT**
1. Open terminal & navigate to project directory (`361-admin`)
2. run `python3 -m venv .`
3. run `source bin/activate`
(idk how git actually works so I'm hoping because I've installed flask it should get pushed up with it, but if not, the next couple instructions is how to get flask)
4. run (in the virtual environment) `pip install flask`

**RUNNING THE WEB APP**
1. Open terminal & navigate to project directory (`361-admin`)
2. run `export FLASK_APP=app`
3. run `export FLASK_ENV=development`
4. run `flask run`
(It should now list the IP address to access the web app; something like 127.0.0.1:#PORT NUMBER)

**CLOSING THE WEB APP**
1. CTRL+C

