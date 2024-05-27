FROM python:3.12.3-alpine

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

RUN chmod +x /app/entrypoint.sh

ENTRYPOINT ["/app/entrypoint.sh"]

CMD [ "python", "./nerisfire/manage.py", "runserver", "0.0.0.0:8000"]
