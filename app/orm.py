import sqlite3

class ORM:
    fields = []
    dbpath = "data/VOTERS.db"
    tablename = ""

    def save(self):
        if self.pk is None:
            self._insert()
        else:
            self._update()

    def _insert(self):
        with sqlite3.connect(self.dbpath) as conn:
            curs = conn.cursor()
            fieldlist = ", ".join(self.fields)
            qmarks = ", ".join(["?" for _ in self.fields])

            SQL = """ INSERT INTO {tablename} ({fieldlist})
                      VALUES ({qmarks}); """.format(
                tablename=self.tablename, fieldlist=fieldlist, qmarks=qmarks)

            values = [getattr(self, field) for field in self.fields]
            curs.execute(SQL, values)

            self.pk = curs.lastrowid

