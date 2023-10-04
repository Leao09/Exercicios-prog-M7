import databases
import ormar
import sqlalchemy

database = databases.Database('postgresql://postgres:admin123@pond4.clt0opifs3lm.us-east-1.rds.amazonaws.com:5432/postgres')
metadata = sqlalchemy.MetaData()


class BaseMeta(ormar.ModelMeta):
    metadata = metadata
    database = database


class User(ormar.Model):
    class Meta(BaseMeta):
        tablename = "user"

    Id: int = ormar.Integer(primary_key=True)
    email: str = ormar.String(max_length=128, unique=True, nullable=False)
    password: str = ormar.String(max_length=16, nullable=False)


class Startup(ormar.Model):
    class Meta(BaseMeta):
        tablename = "startups"

    id: int = ormar.Integer(primary_key=True)
    Name: str = ormar.String(max_length=1024,nullable=False)
    Status: float = ormar.Float()

##engine = sqlalchemy.create_engine(settings.db_url)
engine = sqlalchemy.create_engine('postgresql://postgres:admin123@pond4.clt0opifs3lm.us-east-1.rds.amazonaws.com:5432/postgres', echo=True)
metadata.create_all(engine)