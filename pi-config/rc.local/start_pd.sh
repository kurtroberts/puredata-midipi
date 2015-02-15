#!/bin/bash
# This script will start Pd in nogui
# mode and will open the patch
# named "nicorette.pd"
echo "Starting Pd..."
pd -nogui -midiindev 0,1 -midioutdev 0,1 /home/pi/pd-patches/defaults.pd &
