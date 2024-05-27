#!/bin/sh
set -e

exec "$@"

# Run database migrations
python ./nerisfire/manage.py migrate