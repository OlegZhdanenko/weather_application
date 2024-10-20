import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { UpdateFavoriteDto } from './dto/update-favorite.dto';
import { Repository } from 'typeorm';
import { Favorite } from './entities/favorite.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(Favorite)
    private readonly categoryRepository: Repository<Favorite>,
  ) {}
  async create(createFavoriteDto: CreateFavoriteDto, id: number) {
    const favoriteCities = await this.categoryRepository.findBy({
      user: { id },
      city: createFavoriteDto.city,
    });
    if (favoriteCities.length)
      throw new BadRequestException('This city already in favorite');
    const newFavoriteCity = {
      city: createFavoriteDto.city,
      user: { id },
    };
    return await this.categoryRepository.save(newFavoriteCity);
  }

  async findAll(id: number) {
    return await this.categoryRepository.find({
      where: {
        user: { id },
      },
    });
  }

  async findOne(id: number) {
    const favoriteCity = await this.categoryRepository.findOne({
      where: { id },
      relations: { user: true },
    });
    if (favoriteCity) throw new NotFoundException('This city not found');
    return favoriteCity;
  }

  async update(id: number, updateFavoriteDto: UpdateFavoriteDto) {
    const favoriteCity = await this.categoryRepository.findOne({
      where: { id },
    });
    if (favoriteCity) throw new NotFoundException('This city not found');
    return await this.categoryRepository.update(id, updateFavoriteDto);
  }

  async remove(id: number) {
    const favoriteCity = await this.categoryRepository.findOne({
      where: { id },
    });
    if (!favoriteCity) throw new NotFoundException('This city not found');
    return await this.categoryRepository.delete(id);
  }
}
