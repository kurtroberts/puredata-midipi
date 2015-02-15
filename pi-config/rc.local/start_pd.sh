#!/bin/bash
# This script will start Pd in nogui
# mode and will open the patch
echo "Starting Pd..."
pd-extended -nogui -midiindev 0,1 -midioutdev 0,1 /home/pi/pd-patches/default.pd &
