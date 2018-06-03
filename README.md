# SGA Website #

## Setting up Production ##
* Create a blank sqlite database with `sqlite3 db.sqlite3 ".databases"`
* `source env/bin/activate`
* Initialize the database with `python3 manage.py makemigrations` and then `python3 manage.py migrate` (Do this whenever you make changes to models)

## Installing ##
* `source env/bin/activate`
* `virtualenv -p python3 env`
* `pip install -r requirements.txt`

## Running ##
* `source env/bin/activate`
* `python3 manage.py runserver $PORT` where `$PORT` is desired port.

## Editing Data ##

### Member Information ###
* Member Information is modified in the django admin interface at `/admin`.
* Sponsors have a -1 year to filter out the graduation year field in the generated website.
* Officer bios are optional.

### Forms ###
* This feature is currently being worked on.
