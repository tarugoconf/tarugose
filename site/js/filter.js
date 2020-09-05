const form = document.querySelector('#filter');
const sessions = document.querySelectorAll('.session');

const initialParams = new URLSearchParams(document.location.search);

for (const [name, value] of initialParams) {
  if (name === "title") {
    form[name].value = value;
  } else {
    form[name].checked = true;
  }
}
onChange();

form.addEventListener('submit', (event) => {
  onChange();
  event.preventDefault();
})
form.addEventListener('change', onChange)
form.addEventListener('input', onChange)

function onChange() {
  const data = new FormData(form);
  filter(data);
  const permalink = new URLSearchParams(data);
  history.pushState({}, null, `?${permalink}`);
}

function filter(data) {
  const filters = {
    title: '',
    tags: []
  }
  
  for (const [name, value] of data.entries()) {
    if (name === "title") {
      filters.title = value;
      continue;
    }

    filters.tags.push(name);
  }

  sessions.forEach((session) => session.hidden = !matches(session, filters))
}

function matches(session, filters) {
  const data = JSON.parse(session.dataset.filter);

  if (filters.title && !data.title.toLowerCase().includes(filters.title)) {
    return false;
  }

  for (const tag of filters.tags) {
    if (!data.tags.includes(tag)) {
      return false;
    }
  }

  return true;
}