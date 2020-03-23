release: python manage.py migrate
web: gunicorn discoverpoland.wsgi --log-file -
web: python manage.py runserver 0.0.0.0:5000