import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL ?? "";

export async function execute(file: File) {
  const formData = new FormData();
  formData.append("pdf", file);

  const result = await axios.post(API_URL, formData, {
    responseType: 'blob',
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })

  var url = window.URL.createObjectURL(result.data);
  var a = document.createElement('a');
  a.href = url;
  a.download = "parsed.csv";
  document.body.appendChild(a);
  a.click();
  a.remove();

  return result;
}
