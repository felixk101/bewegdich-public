from django import forms

class LocationForm(forms.Form):
    CHOICES = (('Augsburg','Augsburg'),('Basel','Basel'))
    start = forms.CharField(label='Startpunkt', max_length=100)
    dest = forms.CharField(label='Zielpunkt', max_length=100)
    city = forms.ChoiceField(label='Stadt',widget=forms.RadioSelect, choices=CHOICES)
    coords = forms.CharField(label='myCoords',widget=forms.HiddenInput(), required=False, initial='123')
