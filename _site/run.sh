#!/bin/sh
#export LC_ALL=C.UTF-8
#export LANG=C.UTF-8
#export FLASK_APP=ghswebsite
#export APP_SETTINGS="config.ProductionConfig"
#/web/activities/ghs/public/env/bin/python run.py $PORT
#export PATH=$PATH:/home/2018wzhang/.gem/ruby/2.3.0/bin;
#/home/2018wzhang/.gem/ruby/2.3.0/bin/bundler exec jekyll serve --port $PORT
/web/activities/sga/sgawebsite/manage.py runserver $PORT
#/web/activities/ghs/public/env/bin/python /web/activities/ghs/public/ghswebsite/app.py $PORT
