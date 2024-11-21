from django.db import models

# Create your models here.
class Autor(models.Model):
    id=models.AutoField(primary_key=True)
    apellido=models.CharField(Max_length=100)
    nombre=models.CharField(Max_length=100)
    pais=models.CharField(Max_length=50)
    foto=models.FileField(upload_to='autores',null=True)
    def __str__(self):
        fila="{0}:{1} {2} - {3}"
        return fila.format(self.id,self.apellido,
                           self.nombre,self.pais)

class Libro(models.Model):
    id=models.AutoField(primary_key=True)
    titulo=models.CharField(max_length=100)
    autor=models.ForeignKey(Autor,on_delete=models.CASCADE)
    def __str__(self):
        return self.titulo