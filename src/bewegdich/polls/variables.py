"""
This file contains all variables and constants which are the same for every user.

"""

# Keys for the usersession object
from polls.models import Coord

SPEED = "speed"  # The wakling speed of the user
LOCATION = "location"  # The coordinates of the user

# These to coord-arrays are nessassary to replace the long walk from the FH to the FH-Station.
FH_LONGWAY1 = [
    # Coord("48.3583385", "10.9050651"),
    Coord("48.3584093", "10.9050157"),
    Coord("48.3584625", "10.9049388"),
    Coord("48.3584636", "10.9047304"),
    Coord("48.3584197", "10.9045625"),
    Coord("48.3583621", "10.9042157"),
    Coord("48.3583958", "10.9042109"),
    Coord("48.3584594", "10.9041861"),
    Coord("48.3585003", "10.9044875"),
    Coord("48.3586134", "10.9048809")]

FH_LONGWAY2 = [Coord("48.3582813", "10.9056514"),
               Coord("48.358302", "10.9056054"),
               Coord("48.3583036", "10.9052819"),
               Coord("48.3583385", "10.9050651"),
               Coord("48.3584093", "10.9050157"),
               Coord("48.3584625", "10.9049388"),
               Coord("48.3584636", "10.9047304"),
               Coord("48.3584197", "10.9045625"),
               Coord("48.3583621", "10.9042157"),
               Coord("48.3583958", "10.9042109"),
               Coord("48.3584594", "10.9041861"),
               Coord("48.3585128", "10.9035597"),
               Coord("48.3586289", "10.9028016"),
               Coord("48.3587958", "10.9028619"),
               Coord("48.358855", "10.9027165")]
