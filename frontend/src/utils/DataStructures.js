export function User(
  firstName,
  lastName,
  fullName,
  email,
  imageUrl,
  bio,
  major,
  minor
) {
  this.first_name = firstName;
  this.last_name = lastName;
  this.full_name = fullName;
  this.email = email;
  this.image_url = imageUrl;
  this.bio = bio;
  this.major = major;
  this.minor = minor;
}

export function parseUser(data) {
  const user = new User(
    data.firstName,
    data.lastName,
    data.fullName,
    data.email,
    data.imageUrl,
    data.bio,
    data.major,
    data.minor
  );
  return user;
}
