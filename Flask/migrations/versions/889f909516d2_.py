"""empty message

Revision ID: 889f909516d2
Revises: 3220869566e7
Create Date: 2023-08-01 17:31:05.970352

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '889f909516d2'
down_revision = '3220869566e7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('highscores')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('highscores',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('username_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('score', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['username_id'], ['user.id'], name='highscores_username_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='highscores_pkey')
    )
    # ### end Alembic commands ###