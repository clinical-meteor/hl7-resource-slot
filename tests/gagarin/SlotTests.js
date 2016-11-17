describe('clinical:hl7-resources-slots', function () {
  var server = meteor();
  var client = browser(server);

  it('Slots should exist on the client', function () {
    return client.execute(function () {
      expect(Slots).to.exist;
    });
  });

  it('Slots should exist on the server', function () {
    return server.execute(function () {
      expect(Slots).to.exist;
    });
  });

});
