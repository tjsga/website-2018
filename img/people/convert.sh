#!/bin/sh
FILES=.
for f in $FILES/*.jpg
do
    mkdir -p $FILES/out;
    convert $f -strip -resize 350x350 -quality 85 ${f%.*}-new.jpg;
    mv $FILES/*-new.jpg $FILES/out/$f;

done

