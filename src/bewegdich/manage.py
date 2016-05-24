#!/usr/bin/env python
import os
import sys

if __name__ == "__main__":
    root_path = os.path.abspath(os.path.split(__file__)[0]) + '/..'
    sys.path.insert(0, root_path)
    sys.path.insert(0, os.path.join(root_path, 'bewegdich'))

    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "bewegdich.settings")

    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)
