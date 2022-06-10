import { DarkModePipe } from './dark-mode.pipe';

describe('DarkModePipe', () => {
  it('should return dark mode if send true', () => {
    const pipe = new DarkModePipe();

    expect(pipe.transform(true)).toEqual('bg-gray-900 text-white');
  });

  it('Should return light mode if send false', () => {
    const pipe = new DarkModePipe();

    expect(pipe.transform(false)).toEqual('text-dark');
  });
});
