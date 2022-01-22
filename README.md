
# JWT Entegrasyonu ile Node.js Boilerplate  

Bu projede bir Node.js boilerplate'i hazırlanmıştır. Bu boilerplate "routes", 
"controller", "helpers" ve "service" katmanlarını içermektedir. Routes içinde sunucunun kullancağı
endpointler ve fonksiyonlar yazılmıştır. Projede Trendyol sitesinin apisi kullanılmıştır.
Bu apiden marka ve kategori bilgileri çekilmiştir. Marka bilgileri isme göre ya da
tüm markalar şeklinde çekilmektedir. Kategori bilgileri ise id'ye göre ya da
tüm kategoriler şeklinde çekilmektedir.


## JWT Entegrasyonu
Projede Jwt kullanabilmek için önce proje içine jsonwebtoken ve express-jwt paketlerini 
dahil etmemiz lazım.


```npm i jsonwebtoken```

```npm i express-jwt```

Jwt'yi dahil ettikten sonra bir secret key ve hashing algoritması belirlememiz
gerekmektedir. Daha sonra Jwt kontrolü olmadan girilibilecek endpointlerimizi belirlememiz
gerekmektedir. Örneğin giriş yapmak için "/login" ya da kayıt olmak için "/register" 
endpointlerini herkese açık yapmalıyız.

### Hata Yakalama
Eğer bir tokenımız yoksa ya da farklı bir hata durumu söz konusuysa bunu error handling 
yapısında yakalıyoruz. Böylece bir hata durumunda endpointlere get ya da post isteği atamadan
hatayı, hata kodu ve hata mesajı ile birlikte gönderiyoruz.

## Joi ile Doğrulama İşlemi
Projede kullanıcı kaydı senaryosunda "username", "email" ve "password" gibi değerlerin 
belirli şartlara göre doğrulama işlemi yapılmaktadır. Bu doğrulamayı joi paketi ile 
gerçekleştiriyoruz. Helpers katmanı içinde yazılan doğrulama şartlarını, "validate" 
adındaki ara katman yazılımına göndererek endpointe post edilen req.body'sindeki değerlerin
kontrolü sağlanmaktadır. Eğer doğrulama işlemi gerçekleşmezse, yani girilen değerler şartlara
uymuyorsa post işlemi tamamlanmaz. 