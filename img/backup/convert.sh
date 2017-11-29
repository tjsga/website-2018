#!/bin/sh
FILES=.
for f in $FILES/*.jpg
do
    mkdir -p $FILES/out;
    convert $f -strip -resize 500x500 -quality 90 ${f%.*}-new.jpg;
    mv $FILES/*-new.jpg $FILES/out/$f;

done

