import Swal from 'sweetalert2';

export default function sendAlert(title, text, icon) {
  Swal.fire({
    title,
    text,
    icon,
  });
}