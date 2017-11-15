#!/bin/sh
FILES=.
for f in $FILES/*.jpg
do
    convert $f -strip -resize 150x150 -quality 50 ${f%.*}-new.jpg;
    mkdir -p $FILES/out;
    mv $FILES/*-new.jpg $FILES/out;

done

