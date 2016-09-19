
        Segy.create({
            nombre: nombreArchivo,
            dir: archivoNuevo,
            fecha: fecha,
            hora: hora
            //encabezado:resultado

        }).then(function (segy){Encabezado.create({
            segy:segy.id,
                                                        archivo: nombreEncabezado,
                                                        encabezado: resultado
            }).then(function (encabezado) {Parametros.create( {
                segy: segy.id,
                                                                //datos de los puntos
                                                                //p1
                                                                p1InlineMin: p1BD.inlineMin,
                                                                p1XlineMin: p1BD.xlineMin,
                                                                p1paramX: p1BD.paramX,
                                                                p1paramY: p1BD.paramY,

                                                                //p2
                                                                p2InlineMin: p2BD.inlineMin,
                                                                p2XlineMax: p2BD.xlineMax,
                                                                p2paramX: p2BD.paramX,
                                                                p2paramY: p2BD.paramY,
                                                                //p3
                                                                p3InlineMax: p3BD.inlineMax,
                                                                p3XlineMax: p3BD.xlineMax,
                                                                p3paramX: p3BD.paramX,
                                                                p3paramY: p3BD.paramY,
                                                                //p4
                                                                p4InlineMax: p4BD.inlineMax,
                                                                p4XlineMin: p4BD.xlineMin,
                                                                p4paramX: p4BD.paramX,
                                                                p4paramY: p4BD.paramY,
                                                                f1:parametrosBD.f1,
                                                                f2:parametrosBD.f2,
                                                                f3:parametrosBD.f3,
                                                                f4:parametrosBD.f4,
                                                                f5:parametrosBD.f5,
                                                                f6:parametrosBD.f6,
                                                                comando: " "+parametrosBD.f1+" "
                                                                            +parametrosBD.f2+" "
                                                                            +parametrosBD.f3+" "
                                                                            +parametrosBD.f4+" "
                                                                            +parametrosBD.f5+" "
                                                                            +parametrosBD.f6+" "
                                                                            +p1BD.inlineMin+" "
                                                                            +p1BD.xlineMin
                }).exec(function createCB(err, parametros) {

                    if (err) return console.log(err);
                    console.log('encabezado : ' + segy.nombre + " agregado a la base datos");
                    var py = parseFloat(p4BD.paramX);
                    var py2 = parseFloat(p4BD.paramY);
                    console.log(py + "------" + py2);
                });
            });
        });
