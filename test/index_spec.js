import {expect} from 'chai';
import {parseIpAddress, parseLanguage, parseSoftware} from '../index.js';

describe('The application', () => {
  describe('ip parser', () => {
    it('parses ipv6 addresses', () => {
      expect(parseIpAddress("::ffff:127.0.0.1")).to.equal("127.0.0.1");
    });

    it('parses ipv4 addresses', () => {
      expect(parseIpAddress("127.0.0.1")).to.equal("127.0.0.1");
    });
  });

  describe('language parser', () => {
    it('extracts the first language', () => {
      expect(parseLanguage("en-US,en;q=0.5")).to.equal("en-US");
    });
  });

  describe('software parser', () => {
    it('extracts the operating system', () =>{
      expect(parseSoftware("Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36"))
           .to.equal("Windows NT 10.0; WOW64");
      expect(parseSoftware("Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0"))
           .to.equal("Windows NT 6.1; Win64; x64; rv:47.0");
    });
  });
});
