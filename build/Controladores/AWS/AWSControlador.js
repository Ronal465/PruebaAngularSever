"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObtAWSControlador = void 0;
const AWS = require('aws-sdk');
const fs = require('fs');
const s3 = new AWS.S3({
    accessKeyId: "AKIAJAIRCPM3NJTDXOHQ",
    secretAccessKey: "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"
});
class AWSControlador {
    // Numero 1
    SubirVideo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.file);
            // res.json({ messaje: "sisas"})
            //for text file
            //fs.readFile('demo.txt', function (err, data) {
            //for Video file
            fs.readFile(req.file.path, function (err, data1) {
                //for image file				
                // fs.readFile(req.body.files.foo.name, function (err:any,data1:any) {
                if (err) {
                    throw err;
                }
                console.log(data1);
                const params = { Bucket: "club99/VideosCursos", Key: req.file.originalname, Body: data1, ContentType: req.file.mimetype, ACL: 'public-read' };
                s3.putObject(params, function (err, data) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        const params2 = { Bucket: "club99/VideosCursos", Key: req.file.originalname };
                        s3.getSignedUrlPromise('getObject', params2, function (err, data) {
                            // Handle any error and exit
                            if (err)
                                return err;
                            var Link = "";
                            var LinkFinal = "";
                            for (var i = 0; i < data.length; i++) {
                                var Letra = data.charAt(i);
                                Link += Letra;
                                if (Letra == ".") {
                                    if (data.charAt(i + 1) == "m") {
                                        if (data.charAt(i + 2) == "p") {
                                            if (data.charAt(i + 3) == "4") {
                                                Link += "mp4";
                                                LinkFinal = Link;
                                                res.json({ link: LinkFinal });
                                            }
                                        }
                                    }
                                }
                            }
                        });
                        console.log("Successfully uploaded data to myBucket/myKey");
                    }
                });
            });
        });
    }
    SubirImg(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.file);
            // res.json({ messaje: "sisas"})
            //for text file
            //fs.readFile('demo.txt', function (err, data) {
            //for Video file
            fs.readFile(req.file.path, function (err, data1) {
                //for image file				
                // fs.readFile(req.body.files.foo.name, function (err:any,data1:any) {
                if (err) {
                    throw err;
                }
                console.log(data1);
                const params = { Bucket: "club99/ImagenesCursos", Key: req.file.originalname, Body: data1, ContentType: req.file.mimetype, ACL: 'public-read' };
                s3.putObject(params, function (err, data) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        const params2 = { Bucket: "club99/ImagenesCursos", Key: req.file.originalname };
                        s3.getSignedUrlPromise('getObject', params2, function (err, data) {
                            // Handle any error and exit
                            if (err)
                                return err;
                            var Link = "";
                            var LinkFinal = "";
                            for (var i = 0; i < data.length; i++) {
                                var Letra = data.charAt(i);
                                Link += Letra;
                                if (Letra == ".") {
                                    if (data.charAt(i + 1) == "p") {
                                        if (data.charAt(i + 2) == "n") {
                                            if (data.charAt(i + 3) == "g") {
                                                Link += "png";
                                                LinkFinal = Link;
                                                res.json({ link: LinkFinal });
                                            }
                                        }
                                    }
                                }
                            }
                        });
                        console.log("Successfully uploaded data to myBucket/myKey");
                    }
                });
            });
        });
    }
    SubirImgProfesor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.file);
            // res.json({ messaje: "sisas"})
            //for text file
            //fs.readFile('demo.txt', function (err, data) {
            //for Video file
            fs.readFile(req.file.path, function (err, data1) {
                //for image file				
                // fs.readFile(req.body.files.foo.name, function (err:any,data1:any) {
                if (err) {
                    throw err;
                }
                console.log(data1);
                const params = { Bucket: "club99/ImagenProfesor", Key: req.file.originalname, Body: data1, ContentType: req.file.mimetype, ACL: 'public-read' };
                s3.putObject(params, function (err, data) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        const params2 = { Bucket: "club99/ImagenProfesor", Key: req.file.originalname };
                        s3.getSignedUrlPromise('getObject', params2, function (err, data) {
                            // Handle any error and exit
                            if (err)
                                return err;
                            var Link = "";
                            var LinkFinal = "";
                            for (var i = 0; i < data.length; i++) {
                                var Letra = data.charAt(i);
                                Link += Letra;
                                if (Letra == ".") {
                                    if (data.charAt(i + 1) == "p") {
                                        if (data.charAt(i + 2) == "n") {
                                            if (data.charAt(i + 3) == "g") {
                                                Link += "png";
                                                LinkFinal = Link;
                                                res.json({ link: LinkFinal });
                                            }
                                        }
                                    }
                                }
                            }
                        });
                        console.log("Successfully uploaded data to myBucket/myKey");
                    }
                });
            });
        });
    }
}
exports.ObtAWSControlador = new AWSControlador();
