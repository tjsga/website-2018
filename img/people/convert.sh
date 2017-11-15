#!/bin/sh
FILES=.
for f in $FILES/*.jpg
do
    mkdir -p $FILES/out;
    convert $f -strip -quality 95 ${f%.*}-new.jpg;
    mv $FILES/*-new.jpg $FILES/out/$f;

done

