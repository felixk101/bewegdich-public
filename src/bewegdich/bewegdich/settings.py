"""
Django settings for untitled project.

Generated by 'django-admin startproject' using Django 1.9.5.

For more information on this file, see
https://docs.djangoproject.com/en/1.9/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.9/ref/settings/
"""

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.9/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '1)3!xjb#k(v1_s-s8yh2_a!28^%d17o3c#73!@ck5u0zit4j48'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ['*']

# Application definition

INSTALLED_APPS = [
    'polls.apps.PollsConfig',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'static_precompiler',
    'compressor',
    'cookielaw',
]

MIDDLEWARE_CLASSES = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'bewegdich.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.abspath(os.path.join(os.path.split(__file__)[0], '..', '..', 'templates'))]
        ,
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'bewegdich.wsgi.application'

# Database
# https://docs.djangoproject.com/en/1.9/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': '1_bewegdich',
        'USER': '1_bewegdich',
        'PASSWORD': '3TnTvrI,1_UAnOQb',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.mysql',
#         'NAME': '1_matthiaskrempel',
#         'USER': '1_matthiaskrempe',
#         'PASSWORD': '0lek42WrLHhHGUc,',
#         'HOST': 'bewegdich.informatik.hs-augsburg.de',
#         'PORT': '3306',
#     }
# }

# DATABASES = {
#    'default': {
#        'ENGINE': 'django.db.backends.mysql',
#        'NAME': '1_felixkampfer',
#        'USER': '1_felixkampfer',
#        'PASSWORD': 'yaz++z0V_.kFTSm.',
#        'HOST': 'bewegdich.informatik.hs-augsburg.de',
#        'PORT': '3306',
#    }
# }

# DATABASES = {
#    'default': {
#        'ENGINE': 'django.db.backends.mysql',
#        'NAME': '1_viktorwerlitz',
#        'USER': '1_viktorwerlitz',
#        'PASSWORD': '9QghgLZbn,1yI6VJ',
#        'HOST': 'bewegdich.informatik.hs-augsburg.de',
#        'PORT': '3306',
#    }
# }

# Password validation
# https://docs.djangoproject.com/en/1.9/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/1.9/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

LOCALE_PATHS = [
    os.path.abspath(os.path.join(os.path.split(__file__)[0], '..', '..', 'languages'))
]

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.9/howto/static-files/

STATIC_URL = '/static/'
STATICFILES_DIRS = [
    os.path.abspath(os.path.join(os.path.split(__file__)[0], '..', '..', 'static'))
]
STATICFILES_FINDERS = [
    'compressor.finders.CompressorFinder',
]

# Compressor

COMPRESS_ROOT = os.path.abspath(os.path.join(os.path.split(__file__)[0], '..', '..', 'static'))
COMPRESS_ENABLED = True
COMPRESS_JS_COMPRESSOR = 'compressor.js.JsCompressor'
COMPRESS_VERBOSE = False
COMPRESS_DEBUG_TOGGLE = 'None'
COMPRESS_PARSER = 'compressor.parser.AutoSelectParser'
COMPRESS_OUTPUT_DIR = 'CACHE'
COMPRESS_STORAGE = 'compressor.storage.CompressorFileStorage'
COMPRESS_CSS_COMPRESSOR = 'compressor.css.CssCompressor'
COMPRESS_URL = STATIC_URL
COMPRESS_CSS_FILTERS = ['compressor.filters.css_default.CssAbsoluteFilter']
COMPRESS_CSS_HASHING_METHOD = 'mtime'
COMPRESS_JS_FILTERS = ['compressor.filters.jsmin.JSMinFilter']
COMPRESS_PRECOMPILERS = (
    ('text/stylus', 'stylus < {infile} > {outfile}'),
)
COMPRESS_CLOSURE_COMPILER_BINARY = 'java -jar compiler.jar'
COMPRESS_CLOSURE_COMPILER_ARGUMENTS = ''
COMPRESS_CSSTIDY_BINARY = 'csstidy'
COMPRESS_CSSTIDY_ARGUMENTS = '--template=highest'
COMPRESS_YUI_BINARY = 'java -jar yuicompressor.jar'
COMPRESS_YUI_CSS_ARGUMENTS = ''
COMPRESS_YUI_JS_ARGUMENTS = ''
COMPRESS_DATA_URI_MAX_SIZE = 1024
COMPRESS_CACHE_BACKEND = 'default'
COMPRESS_CACHE_KEY_FUNCTION = 'compressor.cache.simple_cachekey'
COMPRESS_REBUILD_TIMEOUT = 60 * 60 * 24 * 30  # 30 days
COMPRESS_MINT_DELAY = 30  # seconds
COMPRESS_MTIME_DELAY = 10  # seconds
COMPRESS_OFFLINE = False
COMPRESS_OFFLINE_TIMEOUT = 60 * 60 * 24 * 365  # 1 year
COMPRESS_OFFLINE_CONTEXT = {}
COMPRESS_OFFLINE_MANIFEST = 'manifest.json'
COMPRESS_TEMPLATE_FILTER_CONTEXT = {}

# Less Compiler
# Deposit css files more structured and change styles easier

STATIC_PRECOMPILER_ROOT = os.path.abspath(os.path.join(os.path.split(__file__)[0], '..', '..', 'static'))

REST_FRAMEWORK = {
    # Use Django's standard `django.contrib.auth` permissions,
    # or allow read-only access for unauthenticated users.
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly'
    ], 'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
        'rest_framework.renderers.BrowsableAPIRenderer',
    ), 'DEFAULT_PARSER_CLASSES': (
        'rest_framework.parsers.JSONParser'),
    'UNICODE_JSON': False
}

import django

django.setup()
