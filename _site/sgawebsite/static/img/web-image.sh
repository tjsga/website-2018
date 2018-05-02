#!/bin/sh
convert $1 -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG -colorspace sRGB $2
