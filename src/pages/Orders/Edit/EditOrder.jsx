const EditOrder = () => {
  return <div>
        <div class="container py-5 px-5">
        <form>

<div class="form-group"> 
    <label for="titulo" class="control-label">Gestión de paquetes - Actualización de ordenes:</label>
</div> 

<div class="form-group"> 
    <label for="fecha" class="control-label">Fecha</label>
    <input type="text" class="form-control" id="fecha" name="fechah" placeholder="01/01/2021"/>
</div>    

<div class="form-group"> 
    <label for="hora" class="control-label">Hora</label>
    <input type="text" class="form-control" id="hora" name="horah" placeholder="00:00 "/>
</div>                    

<div class="form-group"> 
    <label for="estado" class="control-label">Estado</label>
    <select class="form-control" id="estado">
        <option value="GU">Guardado</option>
        <option value="CA">Cancelado</option>
        <option value="CU">Cumplido</option>
       
    </select>                    
</div>    

<div class="form-group"> 
    <label for="titulo" class="control-label">Características del paquete:</label>
</div> 

<div class="form-group"> 
    <label for="largo" class="control-label">Largo</label>
    <input type="text" class="form-control" id="largo" name="Largoh" placeholder="1 "/>
</div>    

<div class="form-group"> 
    <label for="ancho" class="control-label">Ancho</label>
    <input type="text" class="form-control" id="ancho" name="Anchoh" placeholder="1 "/>
</div>

<div class="form-group"> 
    <label for="alto" class="control-label">Alto</label>
    <input type="text" class="form-control" id="alto" name="Altoh" placeholder="1 "/>
</div>

<div class="form-group"> 
    <label for="peso" class="control-label">Peso</label>
    <input type="text" class="form-control" id="peso" name="Pesoh" placeholder="1 "/>
</div>

<div class="form-group"> 
    <label for="direccionr" class="control-label">Dirección de recogida</label>
    <input type="text" class="form-control" id="direccionr" name="Direccionrh" placeholder="Calle 10 #20-21"/>
</div>                                    
                        
<div class="form-group"> 
    <label for="ciudadr" class="control-label">Ciudad de recogida</label>
    <input type="text" class="form-control" id="ciudadr" name="ciudadrh" placeholder="Barranquilla"/>
</div>        

<div class="form-group"> 
    <label for="nombredes" class="control-label">Nombre del destinatario</label>
    <input type="text" class="form-control" id="nombredes" name="Destinatarioh" placeholder="Luis Diaz"/>
</div>                                    
                        
<div class="form-group"> 
    <label for="identificaciondes" class="control-label">Cédula/NIT del destinatario</label>
    <input type="text" class="form-control" id="identificaciondes" name="Identificacionh" placeholder="111111111"/>
</div>

<div class="form-group"> 
    <label for="direccionentre" class="control-label">Dirección de entrega</label>
    <input type="text" class="form-control" id="direccionentre" name="Direccioneh" placeholder="Calle 1 #2-3"/>
</div>                                    
                        
<div class="form-group"> 
    <label for="ciudadentre" class="control-label">Ciudad de entrega</label>
    <input type="text" class="form-control" id="ciudadentre" name="ciudadeh" placeholder="Santa Marta"/>
</div>

<div class="form-group"> 
    <button type="submit" class="btn btn-primary">Actualizar Orden!</button>
</div>     

</form>
  </div>;
    
  </div>
};

export default EditOrder;
