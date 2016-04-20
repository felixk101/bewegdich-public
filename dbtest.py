import MySQLdb

db = MySQLdb.connect(host="bewegdich.informatik.hs-augsburg.de:4443",    # your host, usually localhost
                     user="1_christiangubo",         # your username
                     passwd="PTPyb81j5+a;K5b2",  # your password
                     db="1_christiangubo")        # name of the data base


# you must create a Cursor object. It will let
#  you execute all the queries you need
cur = db.cursor()

# Use all the SQL you like
cur.execute("SHOW Databases")

# print all the first cell of all the rows
for row in cur.fetchall():
    print row[0]

db.close()