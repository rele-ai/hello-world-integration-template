#!/bin/bash

# global variables
WORKING_DIR=$(pwd)

# clean releai configurations
rb workflow:deactivate hello_world_workflow -d user
rb delete -f "$WORKING_DIR/configs"
