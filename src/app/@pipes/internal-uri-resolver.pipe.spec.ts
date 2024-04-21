import { InternalUriResolverPipe } from './internal-uri-resolver.pipe';

describe('InternalUriResolverPipe', () => {
  it('create an instance', () => {
    const pipe = new InternalUriResolverPipe();
    expect(pipe).toBeTruthy();
  });
});
