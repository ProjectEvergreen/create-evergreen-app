function filterTemplateFiles(packageFiles) {
  packageFiles = packageFiles.filter((file) => {
    return file.substring(0, 9) === 'template/';
  });

  packageFiles = packageFiles.map(file => {
    return file.substring(9, file.length);
  });

  return packageFiles;
}

module.exports = filterFiles = filterTemplateFiles;