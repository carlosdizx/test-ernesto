import {client, server} from '@passwordless-id/webauthn'


const bootstrap = async () => {
  const jsonDevice = {
    "username": "ernesto.diaz@miliopay.com",
    "credential": {
        "id": "1uvIq3DxUsUUU5aMlzu2O5kYBEU26-S8mirMntqUc8A",
        "publicKey": "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE2CIqwQUkfK8oRcjignwqIBgb-d5WWTIwtdYogGNBGLSyghIh4sZh3DiB0qibsDjrxDtRZZ-0tglqdW21zO_vxA==",
        "algorithm": "ES256"
    },
    "authenticatorData": "SZYN5YgOjGh0NBcPZHZgW4_krrmihjLHmVzzuoMdl2NFAAAAAK3OAAI1vMYKZIsLJfHwVQMAINbryKtw8VLFFFOWjJc7tjuZGARFNuvkvJoqzJ7alHPApQECAyYgASFYINgiKsEFJHyvKEXI4oJ8KiAYG_neVlkyMLXWKIBjQRi0IlggsoISIeLGYdw4gdKom7A468Q7UWWftLYJanVttczv78Q=",
    "clientData": "eyJ0eXBlIjoid2ViYXV0aG4uY3JlYXRlIiwiY2hhbGxlbmdlIjoiYTdjNjFlZjktZGMyMy00ODA2LWI0ODYtMjQyODkzOGE1NDdlIiwib3JpZ2luIjoiaHR0cDovL2xvY2FsaG9zdDo0MjAwIiwiY3Jvc3NPcmlnaW4iOmZhbHNlLCJvdGhlcl9rZXlzX2Nhbl9iZV9hZGRlZF9oZXJlIjoiZG8gbm90IGNvbXBhcmUgY2xpZW50RGF0YUpTT04gYWdhaW5zdCBhIHRlbXBsYXRlLiBTZWUgaHR0cHM6Ly9nb28uZ2wveWFiUGV4In0=",
    "attestationData": "o2NmbXRmcGFja2VkZ2F0dFN0bXSiY2FsZyZjc2lnWEcwRQIgAcEjqyfnIbUfy6Pge6YqhxG83ylJ3BO6TEDLLY8YA_0CIQDMtwWiLJ-pPv3x7oiSp5AmG-Iws9qWwoz6Lxb4SZu69mhhdXRoRGF0YVikSZYN5YgOjGh0NBcPZHZgW4_krrmihjLHmVzzuoMdl2NFAAAAAK3OAAI1vMYKZIsLJfHwVQMAINbryKtw8VLFFFOWjJc7tjuZGARFNuvkvJoqzJ7alHPApQECAyYgASFYINgiKsEFJHyvKEXI4oJ8KiAYG_neVlkyMLXWKIBjQRi0IlggsoISIeLGYdw4gdKom7A468Q7UWWftLYJanVttczv78Q="
  }

  const expected = {
    challenge: "a7c61ef9-dc23-4806-b486-2428938a547e",
    origin: "http://localhost:4200",
}
  const registrationParsed = await server.verifyRegistration(jsonDevice as any, expected)
  console.log(registrationParsed);
  
}

(async () => {
 await bootstrap()
})()