# SGA Website #

## Installing ##
* `bundle install --path gems/`

## Running ##
* `bundle exec jekyll serve --port $PORT` where `$PORT` is desired port.

## Editing Data ##

### Officer Information ###
* Officer information is contained within .json files in the _data/about subdirectory. Changes made in these files will be reflected on the generated website.
* Each type of officer has a separate .json file, ExComm has `excomm.json`, for example.
* Sponsors have a -1 year to filter out the graduation year field in the generated website.
* Officer bios are optional.

### Forms ###
* This feature is currently being worked on.
