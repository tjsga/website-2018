#!/bin/sh
FILES=.
for f in $FILES/*.jpg
do
    mkdir -p $FILES/out;
    convert $f -sampling-factor 4:2:0 -strip -resize 300x300 -quality 85 -interlace JPEG -colorspace sRGB ${f%.*}-new.jpg;
    mv $FILES/*-new.jpg $FILES/out/$f;

done

