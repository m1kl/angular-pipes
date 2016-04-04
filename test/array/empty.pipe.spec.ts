import { EmptyPipe } from '../../index';
import {describe, it, beforeEach, expect} from 'angular2/testing';

describe('HeadPipe', () => {
    
    let pipe: EmptyPipe;
    
    beforeEach(() => {
       pipe = new EmptyPipe(); 
    });
    
    it('Should return true', () => {
       
       expect(pipe.transform([])).toEqual(true); 
    });
    
    it('Should return false', () => {
       
       expect(pipe.transform([1,2])).toEqual(false); 
    });
    
    it('Should throw an error', () => {
       
       expect(() => {
           pipe.transform('a')
       }).toThrowError(TypeError); 
    });
    
})