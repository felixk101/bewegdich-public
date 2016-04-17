from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render_to_response
from django.forms.widgets import TextInput

# def index(request):
#
#     return  HttpResponse(TextInput())

def index(request):
    template = loader.get_template('polls/index.html')
    return  HttpResponse(template.render(request))



def redirect(request,question_id):
    print (request)
    template = loader.get_template('polls/redirect.html')
    return HttpResponse(template.render(request))


def detail(request, question_id):
    return HttpResponse("You're looking at question %s." % question_id)


def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)


def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)
