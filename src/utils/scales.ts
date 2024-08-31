import SIZES from 'themes/sizes';

export default function scales(size: number): number {
    return size * SIZES.scrHeight / parseInt('680');
}
