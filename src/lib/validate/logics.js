export const check_empty = (v) => {
  return (v === '');
}

export const trim_space = (v) => {
  v = v.replace(/\s+/g, '');
  return v;
}

export const htmlspecialchars = (v) => {
  v = v.replace(/&/g, '&amp;');
  v = v.replace(/"/g, '&quot;');
  v = v.replace(/'/g, '&#039;');
  v = v.replace(/</g, '&lt;');
  v = v.replace(/>/g, '&gt;');
  return v;
}

export const delete_htmlspecialchars = (v) => {
  v = v.replace(/&/g, '');
  v = v.replace(/"/g, '');
  v = v.replace(/'/g, '');
  v = v.replace(/</g, '');
  v = v.replace(/>/g, '');
  v = v.replace(/,/g, '');
  return v;
}

export const delete_newLine = (v) => {
  v = v.replace(/\r?\n/g, '');
  return v;
}

export const num_conversion = (v) => {
  return v.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
    return String.fromCharCode(s.charCodeAt(0) - 65248);
  });
}