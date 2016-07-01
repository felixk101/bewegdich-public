"""
WSGI config for untitled project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.9/howto/deployment/wsgi/
"""

import os
import sys

root_path = os.path.abspath(os.path.join(os.path.split(__file__)[0], '..', '..'))
sys.path.insert(0, root_path)
sys.path.insert(0, os.path.join(root_path, 'bewegdich'))

from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "bewegdich.settings")

application = get_wsgi_application()

# Monitoring file changes
import bewegdich.monitor
bewegdich.monitor.start(interval=1.0)
