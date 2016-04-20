from django import forms

class LocationForm(forms.Form):
    start = forms.CharField(label='Startpunkt', max_length=100)
    dest = forms.CharField(label='Zielpunkt', max_length=100)